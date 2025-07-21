import { signOut } from './actions'

export function LogoutButton() {
  return (
    <form action={signOut}>
      <button>
        Logout
      </button>
    </form>
  )
}