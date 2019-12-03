import { observable, action, computed } from 'mobx';

export interface Stores {
    todoListStore: TodoListStore;
}
  
class TodoListStore {
    @observable
    myList = ["Potato", "Pizza", "Zebra"];

    @action
    popFromList = () => {
        this.myList.pop();
    }
    @action
    addToList = () => {
        this.myList.push("gnome");
    }
    @action
    addOneThousandGnomes = () => {
      for (let i = 0; i < 1000; i++) {
        this.myList.push("gnome");
      }
    }
    @action
    removeGnomes = () => {
      this.myList = []
    }
    @action
    addMoreGnomes = (gnomeInput:string) => {
        this.myList.push(gnomeInput)
    }
    @action
    addGnomeFromDropDown = (gnomeOption:string) => {
        this.myList.push(gnomeOption)
    }

    @computed
    get myListData() {
        return this.myList;
    }

}

export const store: Stores = {
    todoListStore: new TodoListStore()
}