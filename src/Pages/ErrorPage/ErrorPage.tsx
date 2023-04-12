import styles from './ErrorPage.module.css'

function ErrorPage() {
  return (
    <div className={styles.errorpage}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  )
}

export default ErrorPage

