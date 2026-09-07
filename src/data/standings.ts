import { Standing } from '@/types';

export const standings: Record<string, Standing[]> = {
  f1: [
    { position: 1, driverName: 'M. Verstappen', team: 'Red Bull', points: 56 },
    { position: 2, driverName: 'S. Perez', team: 'Red Bull', points: 44 },
    { position: 3, driverName: 'L. Hamilton', team: 'Mercedes', points: 30 },
  ],
  motogp: [
    { position: 1, driverName: 'F. Bagnaia', team: 'Ducati', points: 45 },
    { position: 2, driverName: 'J. Martin', team: 'Ducati', points: 38 },
    { position: 3, driverName: 'M. Marquez', team: 'Gresini', points: 32 },
  ],
  // ... other categories
};
