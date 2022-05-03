import { SignInButton } from '..';
import { ActiveLink } from '..';

import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="spacetraveling" />
                <nav>
                    <ActiveLink activeClassName={styles.active} href="/">
                      <a>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href="/posts" prefetch>
                      <a>Posts</a>
                    </ActiveLink>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}