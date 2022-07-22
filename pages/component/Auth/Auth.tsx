import { FC } from "react"
import { useForm } from "react-hook-form"
import styles from "./Auth.module.css"

export const Auth:FC = () => {
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        reset
    } = useForm({
        mode:'onBlur'
    });
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset()
    }
     return <div className={styles.auth}>
    
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                <div>Name:</div>
            <input
            {...register('firstName', {
                required: 'Обязательное поле ввода',
                minLength: {
                    value:5,
                    message:'Мининимум 5 символов'
                }
            })}
            />
            </label>
            <div>
                {errors?.firstName && <p>{errors?.firstName?.message || 'ERROR!'}</p>}
            </div>
            <label>
            <div>Password:</div>
            <input
            type='password'
            {...register('password', {
                required: 'Обязательное поле ввода',
                minLength: {
                    value:5,
                    message:'Мининимум 5 символов'
                }
            })}
            />
            </label>
            <div>
                {errors?.firstName && <p>{errors?.password?.message || 'ERROR!'}</p>}
            </div>
            <input type="submit" />
        </form>
  </div>
}
