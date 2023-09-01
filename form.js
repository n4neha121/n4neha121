import React, { useState } from 'react;
import { Text, TextInput, View, styleSheet } from 'react-native';
const form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [display,setdisplay]=useState(false);
    return (
    const resetFormData=()=>{
        setdisplay(false);
        setEmail("");
        setName("");
        setpassword("");
    }
}
        <><View>
            <Text style={{ fontsize: 30 }}>form</Text>
            <TextInput
                style={styleSheet.textinput}
                placeholder="Enter Username"
                onChange={(text) => setName(text)}
                Value={name} />
            <TextInput
                style={styleSheet.textinput}
                placeholder="Enter password"
                onChange={(text) => setEmail(text)}
                Value={email} />
            <TextInput
                style={styleSheet.textinput}
                secureTextEntry={true}
                placeholder="Enter password"
                onChange={(text) => setpassword(text)}
                Value={password} />
            <View style={{ marginBottom: 10 }} />
            <Button color={green} 
            title='print details' onPress={()=>setdisplay/>
        </View><Button title='clear details' /><View>{display ? <View>
        </View> : null
            <Text style={{fontsize:15}}>User name is :{name}</Text>
            <Text style={{ fontsize: 15 }}>User email is :{email}</Text>
            <Text style={{ fontsize: 15 }}>User password is :{password}</Text>


            </View>
        }
 
    }
    
    










'