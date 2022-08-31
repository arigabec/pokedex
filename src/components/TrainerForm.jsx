import * as yup from 'yup';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import API from "./../config/api";

const validationSchema = yup.object ({
    name: yup
        .string('Enter your name')
        .required('Name is required'),
    id_pokemon: yup
        .string('Enter your Pokemon ID')
        .required('Pokemon ID is required'),
});

export const TrainerForm = () => {
    const createTrainer = async (body) => {
        return await API.post("/trainer", body);
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            id_pokemon: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            createTrainer(values);
            alert(`Creando entrenador: ${JSON.stringify(values, null, 2)}`);
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth // equivale a fullWidth = true
                    id="name"
                    name="name"
                    label="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                    fullWidth
                    id="id_pokemon"
                    name="id_pokemon"
                    label="Pokemon ID"
                    value={formik.values.id_pokemon}
                    onChange={formik.handleChange}
                    error={formik.touched.id_pokemon && Boolean(formik.errors.id_pokemon)}
                    helperText={formik.touched.id_pokemon && formik.errors.id_pokemon}
                />
                <Button class="btn-login" color="primary" variant="contained" fullWidth type="submit"> 
                    Submit
                </Button>
            </form>
        </div>
    );
};