import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import StatCard from "../../components/StatCard";

import { stats } from "../../data/mockData";


export default function DashboardPage() {
  return (
    <div className="flex bg-[#1A1A1F] min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <main className="p-8">

          <h2 className="text-3xl font-bold text-[#E5E7EB] mb-2">
            Dashboard RAD
          </h2>

          <p className="text-gray-400 mb-8">
            Resumen general del sistema académico
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {stats.map((stat) => (
              <StatCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
              />
            ))}

          </div>

        </main>

      </div>

    </div>
  );
}