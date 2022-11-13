import styles from './forms-controls.styles.module.css';


export const FormControl = htmlElement => ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div>
      <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
        { htmlElement === "textarea" ? <textarea {...input} {...props} /> : <input {...input} {...props} /> }
        {
          hasError && <span>{ meta.error }</span>
        }
      </div>
    </div>
  )
}
