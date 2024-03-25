import React, {useEffect, useState} from "react";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../ProfileEdit/ProfileEdit.module.css"
import {fetchEditInfoProfileResult, fetchInfoProfileResult} from "../../services/reducers/getInfoProfileSlice";
import {useAppDispatch, useAppSelector} from "../../utils/types/types";


export default function ProfileEdit(): JSX.Element {

    // const getActiveClass = ({isActive}: { isActive: boolean }) => isActive ? styles.active : styles.inactive;

    const dispatch = useAppDispatch();
    // const refreshToken = localStorage.getItem("refreshToken");

    const profileInfo = useAppSelector((state) => state.profileInfo);

    useEffect(() => {
        dispatch(fetchInfoProfileResult());
    }, [dispatch])

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    })

    useEffect(() => {
        setForm({
            name: profileInfo.name,
            email: profileInfo.email,
            password: "",
        })
    }, [profileInfo])

    function editProfile(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        dispatch(fetchEditInfoProfileResult({
            name: form.name,
            email: form.email,
            password: form.password
        }));
    }

    function editCancel() {
        // event.preventDefault();
        setForm({
            name: profileInfo.name,
            email: profileInfo.email,
            password: "",
        });
    }

    const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    return (
            // {profileInfo.isLoading ?
            //     <h1 className={clsx(styles.text, 'text_type_main-medium')}>Данные загружаются...</h1>
            //         :
                    <form className={styles.profileInfo} onSubmit={(e) => editProfile(e)}>
                    <Input extraClass={styles.input} name="name" type={'text'} placeholder={'Имя'} value={form.name}
                           autoComplete="name"
                           onChange={updateInput}
                           icon="EditIcon"
                           disabled={profileInfo.isLoading}
                    />
                    <EmailInput name="email" placeholder={'Логин'} value={form.email}
                                autoComplete={"email"}
                                onChange={updateInput}
                                disabled={profileInfo.isLoading}
                                isIcon={false}
                    />
                    <PasswordInput name="password" placeholder={'Введите новый пароль'}
                                   value={form.password}
                                   autoComplete='current-password'
                                   onChange={updateInput}
                                   disabled={profileInfo.isLoading}
                                   icon="EditIcon"
                    />

                    <div className={styles.buttonsContainer}>
                        <Button htmlType="button" type="secondary" size="medium" onClick={editCancel}>
                            Отмена
                        </Button>
                        <Button htmlType="submit" type="primary" size="medium" extraClass="ml-2">
                            Сохранить
                        </Button>
                    </div>
                </form>
        // }
    )
}