"use client";

import { useState, useEffect } from "react";
import { Loader2, Lock, LogOut, RefreshCw } from "lucide-react";

interface WaitlistEntry {
  id: string;
  email: string;
  name: string | null;
  source: string;
  metadata: Record<string, unknown> | null;
  created_at: string;
}

export default function AdminPage() {
  const SOURCE_CONFIG: Record<string, { label: string; color: string }> = {
    USERS: { label: "Users", color: "bg-blue-500/20 text-blue-400" },
    VOICES: { label: "Voices", color: "bg-green-500/20 text-green-400" },
    ORGS: { label: "Orgs", color: "bg-orange-500/20 text-orange-400" },
    NEXUS: { label: "Nexus", color: "bg-purple-500/20 text-purple-400" },
  };

  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [entries, setEntries] = useState<WaitlistEntry[]>([]);
  const [sourceFilter, setSourceFilter] = useState<string>("ALL");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/waitlist", {
        headers: { "x-admin-password": password },
      });

      if (response.status === 401) {
        setError("Password errata");
        return;
      }

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const { data } = await response.json();
      setEntries(data || []);
      setIsAuthenticated(true);
      sessionStorage.setItem("admin_password", password);
    } catch {
      setError("Errore di connessione");
    } finally {
      setIsLoading(false);
    }
  };

  const refreshData = async () => {
    setIsLoading(true);
    try {
      const storedPassword = sessionStorage.getItem("admin_password");
      const response = await fetch("/api/admin/waitlist", {
        headers: { "x-admin-password": storedPassword || password },
      });

      if (response.ok) {
        const { data } = await response.json();
        setEntries(data || []);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    setEntries([]);
    sessionStorage.removeItem("admin_password");
  };

  useEffect(() => {
    const storedPassword = sessionStorage.getItem("admin_password");
    if (storedPassword) {
      setPassword(storedPassword);
      fetch("/api/admin/waitlist", {
        headers: { "x-admin-password": storedPassword },
      })
        .then((res) => {
          if (res.ok) return res.json();
          throw new Error("Unauthorized");
        })
        .then(({ data }) => {
          setEntries(data || []);
          setIsAuthenticated(true);
        })
        .catch(() => {
          sessionStorage.removeItem("admin_password");
        });
    }
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("it-IT", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-charcoal-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-charcoal-800 rounded-2xl p-8 border border-white/10">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <Lock className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="font-montserrat text-2xl font-bold text-white text-center mb-6">
              Admin Access
            </h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-white/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-white bg-charcoal-900 placeholder:text-gray-500"
                  placeholder="Password"
                  autoFocus
                />
              </div>
              {error && <p className="text-red-400 text-sm text-center">{error}</p>}
              <button
                type="submit"
                disabled={isLoading || !password}
                className="w-full py-3 px-4 bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Accesso...
                  </>
                ) : (
                  "Accedi"
                )}
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-charcoal-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h1 className="font-montserrat text-3xl font-bold text-white">
            Waitlist Submissions
          </h1>
          <div className="flex gap-3">
            <button
              onClick={refreshData}
              disabled={isLoading}
              className="px-4 py-2 bg-charcoal-800 hover:bg-charcoal-700 text-white rounded-lg transition-all flex items-center gap-2 border border-white/10"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
              Aggiorna
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-all flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Esci
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {["ALL", "USERS", "VOICES", "ORGS", "NEXUS", "PARTNERS"].map((src) => {
            const cfg = SOURCE_CONFIG[src];
            const count = src === "ALL" ? entries.length : entries.filter(e => e.source === src).length;
            return (
              <button
                key={src}
                onClick={() => setSourceFilter(src)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all border ${
                  sourceFilter === src
                    ? src === "ALL"
                      ? "bg-white/20 text-white border-white/40"
                      : `${cfg.color} border-current`
                    : "bg-charcoal-800 text-gray-400 border-white/10 hover:border-white/30"
                }`}
              >
                {src === "ALL" ? "Tutti" : cfg.label} ({count})
              </button>
            );
          })}
        </div>

        <div className="bg-charcoal-800 rounded-2xl border border-white/10 overflow-hidden">
          <div className="p-4 border-b border-white/10">
            <p className="text-gray-400">
              {sourceFilter === "ALL" ? "Totale" : SOURCE_CONFIG[sourceFilter]?.label}:{" "}
              <span className="text-white font-semibold">
                {sourceFilter === "ALL" ? entries.length : entries.filter(e => e.source === sourceFilter).length}
              </span>{" "}
              iscrizioni
            </p>
          </div>

          {entries.filter(e => sourceFilter === "ALL" || e.source === sourceFilter).length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-gray-400">Nessuna iscrizione ancora</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-gray-400 font-medium">Data</th>
                    <th className="text-left p-4 text-gray-400 font-medium">Email</th>
                    <th className="text-left p-4 text-gray-400 font-medium">Nome</th>
                    <th className="text-left p-4 text-gray-400 font-medium">Fonte</th>
                    <th className="text-left p-4 text-gray-400 font-medium">Metadata</th>
                  </tr>
                </thead>
                <tbody>
                  {entries.filter(e => sourceFilter === "ALL" || e.source === sourceFilter).map((entry) => (
                    <tr key={entry.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="p-4 text-gray-300 whitespace-nowrap">
                        {formatDate(entry.created_at)}
                      </td>
                      <td className="p-4 text-white">{entry.email}</td>
                      <td className="p-4 text-gray-300">{entry.name || "-"}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 text-sm rounded-full ${SOURCE_CONFIG[entry.source]?.color ?? "bg-primary/20 text-primary"}`}>
                          {SOURCE_CONFIG[entry.source]?.label ?? entry.source}
                        </span>
                      </td>
                      <td className="p-4 text-gray-400 text-sm max-w-xs truncate">
                        {entry.metadata ? (
                          <details className="cursor-pointer">
                            <summary className="hover:text-white">Mostra dettagli</summary>
                            <pre className="mt-2 p-2 bg-charcoal-900 rounded text-xs overflow-auto max-h-40">
                              {JSON.stringify(entry.metadata, null, 2)}
                            </pre>
                          </details>
                        ) : (
                          "-"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
