import { Standing, RaceSchedule } from '@/types';
import Button from '@/components/ui/Button';
import Image from 'next/image';

interface SidebarProps {
  standings: Record<string, Standing[]>;
  schedule: RaceSchedule[];
}

export default function Sidebar({ standings, schedule }: SidebarProps) {
  // Display top 3 standings for F1 (you can extend to show active series)
  const f1Standings = standings.f1 || [];

  return (
    <div className="space-y-8">
      {/* Upcoming Races */}
      <div className="bg-carbon-light p-4 rounded-xl">
        <h3 className="text-xl font-bold mb-4">Upcoming Races</h3>
        <ul className="space-y-3">
          {schedule.slice(0, 5).map((race) => (
            <li key={race.id} className="flex justify-between items-center">
              <div>
                <p className="font-medium">{race.trackName}</p>
                <p className="text-sm text-gray-400">{race.date} • {race.category}</p>
              </div>
              <Button variant="outline" size="sm">
                Set Reminder
              </Button>
            </li>
          ))}
        </ul>
      </div>

      {/* Standings */}
      <div className="bg-carbon-light p-4 rounded-xl">
        <h3 className="text-xl font-bold mb-4">Championship Standings</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-400">
              <th>#</th>
              <th>Driver</th>
              <th className="text-right">Pts</th>
            </tr>
          </thead>
          <tbody>
            {f1Standings.map((s) => (
              <tr key={s.position} className="border-t border-carbon">
                <td className="py-2">{s.position}</td>
                <td>
                  <div className="font-medium">{s.driverName}</div>
                  <div className="text-xs text-gray-400">{s.team}</div>
                </td>
                <td className="text-right font-bold">{s.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Latest Videos (stub) */}
      <div className="bg-carbon-light p-4 rounded-xl">
        <h3 className="text-xl font-bold mb-4">Latest Videos</h3>
        <ul className="space-y-3">
          {[1, 2, 3].map((i) => (
            <li key={i} className="flex items-center space-x-3">
              <div className="relative w-20 h-12 bg-gray-700 rounded flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-f1-red flex items-center justify-center">
                  <span className="text-white text-xs">▶</span>
                </div>
              </div>
              <span className="text-sm">Race Highlights #{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
