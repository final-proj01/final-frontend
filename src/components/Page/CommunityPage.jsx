import CommunityEmbed from '../Embeds/CommuntiyEmbeds';
import styles from '../Page/CommunityCard';
import CommunityCard from './CommunityCard';




export default function Community() {
  return <section className={styles.CommunityCard}>
    <CommunityCard />
    <CommunityEmbed />
  </section>;
}
