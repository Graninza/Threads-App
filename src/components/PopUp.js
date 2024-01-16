import PopUpThread from './PopUpThread';
import ThreadInput from './ThreadInput';

const  PopUp = ({user, setOpenPopUp, popUpFeedThreads, text, setText, postThread}) => {
    return (
      <div className="popup">
        <p onClick={() => setOpenPopUp(false)}>X</p>
        {popUpFeedThreads?.map(popUpFeedThread => 
                        <PopUpThread
                          key={popUpFeedThread.id}
                          popUpFeedThread={popUpFeedThread}
                        />
                      )}
        <ThreadInput
            user={user}
            text={text}
            setText={setText}
            postThread={postThread}
        />
      </div>
    );
  }
  
  export default PopUp;