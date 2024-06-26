import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { RecordsEntity } from '@capital/shared/records';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const records = [
      {
        id: 0,
        name: 'Reese Dejesus',
        department: 'PLUTORQUE',
        email: 'reesedejesus@plutorque.com',
        phone: '+359 (976) 583-3934',
        address: '228 Kathleen Court, Brutus, California, 1732',
        salary: '$2,495.95',
      },
      {
        id: 1,
        name: 'Baldwin Hyde',
        department: 'CODAX',
        email: 'baldwinhyde@codax.com',
        phone: '+359 (858) 541-3220',
        address: '417 Hampton Avenue, Calvary, Arkansas, 4141',
        salary: '$1,033.87',
      },
      {
        id: 2,
        name: 'Queen Bentley',
        department: 'GAZAK',
        email: 'queenbentley@gazak.com',
        phone: '+359 (844) 502-3466',
        address: '933 Fleet Street, Geyserville, Colorado, 6709',
        salary: '$1,096.82',
      },
      {
        id: 3,
        name: 'Mcneil Joseph',
        department: 'EQUITOX',
        email: 'mcneiljoseph@equitox.com',
        phone: '+359 (930) 448-3864',
        address: '480 Rose Street, Waumandee, Utah, 9705',
        salary: '$1,348.33',
      },
      {
        id: 4,
        name: 'Sondra Brock',
        department: 'VOLAX',
        email: 'sondrabrock@volax.com',
        phone: '+359 (974) 482-3462',
        address: '910 Keap Street, Holcombe, Delaware, 911',
        salary: '$1,948.25',
      },
      {
        id: 5,
        name: 'Olivia Merritt',
        department: 'ZOARERE',
        email: 'oliviamerritt@zoarere.com',
        phone: '+359 (996) 432-3347',
        address: '187 Hope Street, Osage, Minnesota, 5714',
        salary: '$3,135.09',
      },
      {
        id: 6,
        name: 'Rosalinda Dunlap',
        department: 'FIBRODYNE',
        email: 'rosalindadunlap@fibrodyne.com',
        phone: '+359 (996) 492-2671',
        address: '325 Carlton Avenue, Walland, Maryland, 6543',
        salary: '$2,038.01',
      },
      {
        id: 7,
        name: 'Abbott Phillips',
        department: 'STEELFAB',
        email: 'abbottphillips@steelfab.com',
        phone: '+359 (815) 574-2245',
        address: '181 Tudor Terrace, Staples, North Dakota, 7680',
        salary: '$1,817.69',
      },
      {
        id: 8,
        name: 'Lea Pugh',
        department: 'SPRINGBEE',
        email: 'leapugh@springbee.com',
        phone: '+359 (919) 462-2825',
        address: '757 Vandervoort Place, Ada, New Jersey, 347',
        salary: '$1,103.56',
      },
      {
        id: 9,
        name: 'Lucinda Ratliff',
        department: 'FLUMBO',
        email: 'lucindaratliff@flumbo.com',
        phone: '+359 (903) 536-3023',
        address: '872 Nixon Court, Aurora, Missouri, 848',
        salary: '$2,455.95',
      },
    ];
    return { records };
  }

  // Generate new ID depending on the currently existing entries
  genId(records: RecordsEntity[]): number {
    return records.length > 0 ? Math.max(...records.map((record) => record.id)) + 1 : 1;
  }
}
