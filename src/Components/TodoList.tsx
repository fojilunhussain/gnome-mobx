import * as React from "react";
import { inject, observer } from "mobx-react";
import { Stores } from "../Store/Store";

interface IInjectedProps {
  myList?: string[];
  popFromList?: () => void;
  addToList?: () => void;
  addOneThousandGnomes?: () => void;
  removeGnomes?: () => void;
  addMoreGnomes?: (gnomeInput:string) => void;
  addGnomeFromDropDown?: (gnomeOption:string) => void;
}

const TodoListRaw = (props: IInjectedProps) => {
  const [gnomeInput, setGnomeInput] = React.useState<string>("");
  const [gnomeOption, setGnomeOption] = React.useState<string>("");

  const { myList, popFromList, addToList, addOneThousandGnomes, removeGnomes, addMoreGnomes,
          addGnomeFromDropDown
        } = props;

  const gnomeList = [popFromList, addToList]

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGnomeInput(event.target.value)
  }

  const onGnome = () => {
      if (gnomeInput.toLowerCase().includes("gnome")) {
        addMoreGnomes!(gnomeInput);
      }
  }

  const onOptionChange = () => {
      // setGnomeOption()
  }

  const onDropDownGnome = () => {
      addGnomeFromDropDown!(gnomeOption);
  }

  return (
    <>
      <button onClick={() => gnomeList[Math.floor(Math.random()*2)]!()}>
        gnome
      </button>
      <button onClick={() => {if (Math.floor(Math.random()*100) === 1) {addOneThousandGnomes!()}}}>
        gnome
      </button>
      <button onClick={() => {removeGnomes!()}}>
        gnome
      </button>
      <button onClick={() => {onGnome!()}}>
        gnome
      </button>
      <input
        type = "text"
        value = {gnomeInput}
        onChange = {onInputChange}
      />
      <button onClick={() => {}}>
        gnome
      </button>
      <select
        onChange = {onOptionChange}
      >
        <option
          value = "gnomeOption"
        >
          gnome
        </option>
        <option>
          gnome
        </option>
      </select>
      <br  />
      gnome: <br />
      <ol>
        {myList!.map(item => (
          <li>{item}</li>
        ))}
      </ol>
    </>
  );
};

export const TodoList = inject(
  ({ store }: { store: Stores }): IInjectedProps => ({
    myList: store.todoListStore.myListData,
    popFromList: store.todoListStore.popFromList,
    addToList: store.todoListStore.addToList,
    addOneThousandGnomes: store.todoListStore.addOneThousandGnomes,
    removeGnomes: store.todoListStore.removeGnomes,
    addMoreGnomes: store.todoListStore.addMoreGnomes,
    addGnomeFromDropDown: store.todoListStore.addGnomeFromDropDown
  })
)(observer(TodoListRaw));
