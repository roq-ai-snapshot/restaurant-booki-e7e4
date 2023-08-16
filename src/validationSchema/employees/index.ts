import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  job_title: yup.string().required(),
  working_hours: yup.string().required(),
  salary: yup.number().integer().required(),
  start_date: yup.date().required(),
  user_id: yup.string().nullable(),
  restaurant_id: yup.string().nullable(),
});
