import AuthContext from './Authentication/AuthProvider';
import { useContext, useState } from 'react';

export function LeaseCard() {
    const { currentUser } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
  
    useEffect(() => {
      if (currentUser) {
        const starCountRef = ref(db, "users/" + currentUser.uid);
        onValue(starCountRef, (snapshot) => {
          if (snapshot.exists()) {
            var data = snapshot.val();
            setName(data.name);
          }
        });
      }
    }, [currentUser]);
    return (
        <div></div>
    )
}