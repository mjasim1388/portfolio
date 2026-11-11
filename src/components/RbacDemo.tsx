"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, ShieldAlert, ShieldCheck, User, Lock, 
  LayoutDashboard, Users, CalendarCheck, Factory, 
  Wallet, Package, ShoppingCart, Settings, FileWarning
} from "lucide-react";

const roles = [
  { id: "admin", label: "Admin", icon: ShieldAlert, color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/30" },
  { id: "manager", label: "Manager", icon: ShieldCheck, color: "text-cyan-400", bg: "bg-cyan-400/10", border: "border-cyan-400/30" },
  { id: "supervisor", label: "Supervisor", icon: Shield, color: "text-violet-400", bg: "bg-violet-400/10", border: "border-violet-400/30" },
  { id: "worker", label: "Worker", icon: User, color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/30" },
];

const modules = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, allowed: ["admin", "manager", "supervisor", "worker"] },
  { id: "employees", label: "Employees", icon: Users, allowed: ["admin", "manager"] },
  { id: "attendance", label: "Attendance", icon: CalendarCheck, allowed: ["admin", "manager", "supervisor", "worker"] },
  { id: "production", label: "Production", icon: Factory, allowed: ["admin", "manager", "supervisor"] },
  { id: "payroll", label: "Payroll", icon: Wallet, allowed: ["admin"] },
  { id: "inventory", label: "Inventory", icon: Package, allowed: ["admin", "manager"] },
  { id: "sales", label: "Sales", icon: ShoppingCart, allowed: ["admin", "manager"] },
  { id: "settings", label: "System Settings", icon: Settings, allowed: ["admin"] },
];

export default function RbacDemo() {
  const [activeRole, setActiveRole] = useState("admin");

  const currentRoleData = roles.find((r) => r.id === activeRole);

  return (
    <div className="my-16 rounded-2xl border border-neutral-800 bg-[#0a0a0a] overflow-hidden">
      {/* Header */}
      <div className="border-b border-neutral-800 bg-neutral-900/50 p-6 sm:p-8">
        <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <Lock className="h-5 w-5 text-amber-500" />
          Interactive RBAC Simulation
        </h3>
        <p className="text-neutral-400 text-sm max-w-2xl">
          The system uses custom middleware to restrict access. Click below to see exactly what the sidebar and permissions look like for each of the 4 roles in the database.
        </p>
      </div>

      <div className="p-6 sm:p-8 grid lg:grid-cols-3 gap-8">
        
        {/* Left: Role Selector */}
        <div className="lg:col-span-1">
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-4">Select Persona</p>
          <div className="flex flex-col gap-3">
            {roles.map((role) => {
              const Icon = role.icon;
              const isActive = activeRole === role.id;
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveRole(role.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-300 ${
                    isActive 
                      ? `${role.bg} ${role.border} ${role.color} shadow-lg scale-[1.02]` 
                      : "border-neutral-800 bg-transparent text-neutral-400 hover:bg-neutral-900 hover:text-neutral-200"
                  }`}
                >
                  <span className="flex items-center gap-3 font-medium">
                    <Icon className="h-4 w-4" />
                    {role.label}
                  </span>
                  {isActive && <span className="text-[10px] font-mono uppercase bg-black/30 px-2 py-0.5 rounded">Active</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Mock UI Panel */}
        <div className="lg:col-span-2">
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-4">System Access Level</p>
          
          <div className="rounded-xl border border-neutral-800 bg-black overflow-hidden shadow-2xl">
            {/* Fake App Header */}
            <div className="border-b border-neutral-800 p-4 flex items-center justify-between bg-neutral-900/40">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded bg-amber-500/20 flex items-center justify-center">
                  <Factory className="h-3 w-3 text-amber-500" />
                </div>
                <span className="text-xs font-bold text-white tracking-wide">COAL_OPS</span>
              </div>
              <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono border ${currentRoleData?.bg} ${currentRoleData?.border} ${currentRoleData?.color}`}>
                LOGGED IN AS: {currentRoleData?.label.toUpperCase()}
              </div>
            </div>

            {/* Fake App Sidebar List */}
            <div className="p-3 space-y-1">
              {modules.map((mod) => {
                const Icon = mod.icon;
                const hasAccess = mod.allowed.includes(activeRole);
                
                return (
                  <div
                    key={mod.id}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${
                      hasAccess 
                        ? "text-neutral-300 hover:bg-neutral-900 cursor-pointer" 
                        : "text-neutral-600 bg-neutral-950/50 cursor-not-allowed opacity-60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`h-4 w-4 ${hasAccess ? currentRoleData?.color : "text-neutral-700"}`} />
                      <span className={hasAccess ? "font-medium" : "line-through"}>{mod.label}</span>
                    </div>
                    {!hasAccess && (
                      <span className="flex items-center gap-1 text-[10px] font-mono text-red-500/70">
                        <Lock className="h-3 w-3" /> 403
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* Fake App Footer */}
            <div className="border-t border-neutral-800 p-3 text-[10px] font-mono text-neutral-600 flex justify-between bg-neutral-900/40">
              <span>PostgreSQL • Django</span>
              <span className="flex items-center gap-1"><Shield className="h-3 w-3" /> RBAC_MIDDLEWARE_ACTIVE</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}