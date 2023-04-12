import styles from './EmptyState.module.css'

function EmptyStarter() {
  return (
    <div className={styles.emptystate}>
      <h1>Getting Started</h1>
      <p>Welcome to the gnNews!</p>
      <p>Select items from the list to get the latest information from the selected country.</p>
    </div>
  )
}

export default EmptyStarter

