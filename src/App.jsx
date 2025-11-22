import { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [note, setNote] = useState("");
  const [desc, setDesc] = useState("");

  const [task, setTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({note,desc});
    setTask(copyTask);

    setNote("");
    setDesc("");
  };

  const deleteNote = (idx)=>{
    const delTask = [...task];
    delTask.splice(idx,1);
    setTask(delTask);
    
  }

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col gap-4 lg:w-1/2 items-start p-10"
      >
        <h1 className="text-3xl font-bold">Add notes</h1>
        <input
          type="text"
          placeholder="Write notes"
          className="p-5 w-full py-2 outline-none font-medium border-2 rounded"
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
          }}
        />
        <textarea
          type="text"
          placeholder="Write details"
          className="p-5 w-full h-32 py-2 outline-none flex items-start flex-row font-medium border-2 rounded"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className="bg-white active:scale-90 w-full outline-none font-medium text-black px-5 py-2 rounded">
          Add Notes
        </button>
      </form>
      <div className="lg:w-1/2 p-10 lg:border-l-2">
        <h1 className="text-4xl font-bold">Your notes</h1>
        <div className="flex flex-wrap items-start justify-start  gap-5 mt-5 overflow-auto">
          {task.map(function(ele,idx){

            return <div key={idx} className="relative h-52 py-8 px-4 w-40 rounded-2xl bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] text-black bg-cover">
              <h2 onClick={()=>{
                deleteNote(idx);
              }} className="absolute top-4 right-2 bg-red-500 p-1 rounded-full text-xs cursor-pointer active:scale-70"><X color="#fff"/></h2>
              <h3 className="leading-tight text-lg font-bold">{ele.note}</h3>
              <p className="mt-5 leading-tight font-semibold text-xs text-gray-600">{ele.desc}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
