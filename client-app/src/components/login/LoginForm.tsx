import React, { useContext } from 'react'
import { Form, Button, Label } from 'semantic-ui-react'
import { Form as FinalForm, Field} from 'react-final-form'
import TextInput from '../form/TextInput'
import { RootStoreContext } from '../../app/stores/rootStore'
import { IUserFormValues } from '../../app/interfaces/IUser'
import {FORM_ERROR} from 'final-form'
import { isRequired, combineValidators } from 'revalidate'

const validate = combineValidators({
    email: isRequired('email'),
    password: isRequired('password')
})

const LoginForm = () => {
    const rootStore = useContext(RootStoreContext)
    const { login } = rootStore.userStore;

    return (
        <FinalForm
            onSubmit={(values: IUserFormValues) => login(values).catch(error => ({
                [FORM_ERROR]: error
            }))}
            validate={validate}
            render={({handleSubmit, submitting, submitError, invalid, pristine, dirtySinceLastSubmit}) => (
                <Form onSubmit={handleSubmit}>
                    <Field
                        name='email'
                        component={TextInput}
                        placeholder='Email'
                    />
                    <Field
                        type="password"
                        name="password"
                        component={TextInput}
                        placeholder='Password'
                    />
                    {submitError && !dirtySinceLastSubmit && <React.Fragment><Label color='red' basic content={submitError.statusText}/> <br/></React.Fragment> }
                    
                    <Button disabled={invalid && !dirtySinceLastSubmit || pristine} loading={submitting} positive content='Login'/>
                </Form>
            )}
        />
    )
}

export default LoginForm