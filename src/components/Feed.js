import Thread from './Thread';

const  Feed = ({ user, setOpenPopUp, filteredThreads, getThreads, setInteractingThread }) => {
    return (
      <div className="feed">
        {filteredThreads?.map(filteredThread => 
             <Thread 
                key={filteredThread.id} 
                setOpenPopUp={setOpenPopUp}
                user={user} 
                filteredThread={filteredThread}
                getThreads={getThreads}
                setInteractingThread={setInteractingThread}

             />)}
      </div>
    );
  }
  
  export default Feed;