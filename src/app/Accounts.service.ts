export class AccountsService {
    static id : number = 0;

    constructor() {
        console.log(`Constructed AccountsService #${++AccountsService.id}`);
    }

    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
      
    addAccount(name:string, status: string) {
        this.accounts.push({name, status});
    }

    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;    
    }

}