import React from 'react'
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
	input:{
		width: '500px',
		margin: '0 auto 20px',
		display: 'block'
	}
	
})

type InputFormProps = {
	fullWidth: boolean,
	label: string,
	rows: number,
	multiline: boolean,
	value: string,
	onChange: (e:any) => void 
}

const InputForm = (props: InputFormProps)=>{
	const classes = useStyles()
	return (
	<TextField
			className={classes.input}
			fullWidth={props.fullWidth}
			label={props.label}
			rows={props.rows}
			multiline={props.multiline}
			value={props.value}
			onChange={(e)=>props.onChange(e)}
		/>
)
}

export default InputForm
