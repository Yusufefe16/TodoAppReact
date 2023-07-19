import {useState } from 'react'

function Form({addContact, contacts, handleSelectAll}) {
    const [form,setForm]= useState({task:"",})

    const onChanceInput = (e) =>{
        setForm({...form, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(form.task === "" ){
            return false;
        }
        addContact([...contacts, form]);
        setForm({task:""});
        console.log(form);
    }

  return (  
    <div>
        <form onSubmit={onSubmit}>
        <div>
        <input 
            name="task" 
            placeholder='  Add Task' 
            onChange={onChanceInput} 
            value={form.task}/>
        </div>

        
        <div className='all me-auto'>
        <span>
            <button 
            className='py-1'
            onClick={handleSelectAll}
            >Select all</button>
        </span>
        <span className='btn ms-auto'>
            <button >Add</button>
        </span>
        </div>
    </form>
    </div>
  ) 
}

export default Form 