import { Button } from 'components/UserMenu/UserMenu.styled';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/auth.thunk';
import { Form, Input, Label } from './RegisterForm.styled';


export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
      );
      if(form.elements.password.value.length < 7){
        toast.error('Password must be at least 7 characters.Try again');
        return
      } else {
        toast.success('Registration is successful!');
      }
    
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Name
        <Input type="text" name="name" />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Sing up</Button>
    </Form>
  );
};