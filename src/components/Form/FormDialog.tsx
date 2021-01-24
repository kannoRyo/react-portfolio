import React, { useCallback, useState } from 'react'
import  '../../assets/css/FormDialog.css'
import InputForm from './InputForm'
import {Button} from '@material-ui/core'

const FormDialog = ()=>{
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    const handleName = useCallback((e)=>{
        console.log(e.target.value)
        setName(e.target.value)
    },[name])

    const handleEmail = useCallback((e)=>{
        console.log(e.target.value)
        setEmail(e.target.value)
    },[email])

    const handleDescription = useCallback((e)=>{
        console.log(e.target.value)
        setDescription(e.target.value)
    },[description])

    const submitSlack = (name: string, email: string, description: string)=>{
    }

	return (
	<div　className="form-dialog" >
        <h2>お問い合わせフォーム(SlackAPIを利用)</h2>        
        <InputForm
            fullWidth={true} label={"お名前"} rows={1} multiline={false}
            value={name} onChange={handleName}
        />
        <InputForm
            fullWidth={true} label={"メールアドレス"} rows={1} multiline={false}
            value={email} onChange={handleEmail}
        />
        <InputForm
            fullWidth={true} label={"お問い合わせ内容"} rows={3} multiline={true}
            value={description} onChange={handleDescription}
        />
        
        <Button 
            variant="contained" color="primary" 
            fullWidth={true} style={{width: '500px', display:'block',margin: '0 auto'}}
            onClick={()=> submitSlack(name, email, description)}
        >送信</Button>
    </div>
)
}

export default FormDialog
