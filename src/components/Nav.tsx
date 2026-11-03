import { getReviewedRecipes } from '@/lib/recipes'
import NavClient from './NavClient'

// Server wrapper: reads the recipe list at build time so only a true/false flag
// reaches the browser. Import Nav only from server components.
export default function Nav() {
  return <NavClient hasRecipes={getReviewedRecipes().length > 0} />
}
