import React, { useCallback, useState } from 'react'
import  '../../assets/css/FormDialog.css'
import InputForm from './InputForm'
import {Button} from '@material-ui/core'

const { IncomingWebhook } = require('@slack/webhook');

const FormDialog = ()=>{
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    const handleName = useCallback((e)=>{
        setName(e.target.value)
    },[name])

    const handleEmail = useCallback((e)=>{
        setEmail(e.target.value)
    },[email])

    const handleDescription = useCallback((e)=>{
        setDescription(e.target.value)
    },[description])

    const submitSlack = (name: string, email: string, description: string)=>{
        const url = "https://hooks.slack.com/services/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"

        const payload = {
            text:'お問い合わせがありました。\n' +
                 `氏名: ${name} \n`+
                 `メールアドレス: ${email}\n`+
                 `お問い合わせ内容:\n`+
                 `${description}`
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(payload)
        }).then(()=>{
            alert('お問い合わせが完了しました。')
            setName('')
            setEmail('')
            setDescription('')
        })
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
