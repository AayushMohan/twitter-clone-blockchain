const styles = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
}

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h2>Sidebar</h2>
        <h2>Feed</h2>
        <h2>Widgets</h2>
      </div>
    </div>
  )
}
