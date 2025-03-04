import ProfileCard from "./profile-card"
import { ThemeProvider } from "../theme-provider"

export default function Home() {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <ProfileCard />
    </ThemeProvider>
  )
}
