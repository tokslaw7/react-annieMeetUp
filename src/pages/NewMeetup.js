import { useHistory } from 'react-router-dom'
import NewMeetupForm from "../meetups/NewMeetupForm";

function NewMeetupPage (){
    const history = useHistory();

    function addMeetupHandler(meetupData){
        fetch(
            'https://react-annie-meetup-default-rtdb.firebaseio.com/meetups.json',
         {
            method:'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'content-Type': 'application/json', 
                }
    }
    ).then(() =>{
        history.replace('/');
    }) ;  
}


      

    return (
        <section><h1>Add New Meetup Page</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
        

    );
}
 export default NewMeetupPage;