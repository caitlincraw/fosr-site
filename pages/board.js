import Member from '../components/Member/Member'
import styles from './styles/board.module.css'
import PageHeader from '../components/PageHeader/PageHeader'


export default function Board() {
    return (
        <main>
          <PageHeader title="MEET THE BOARD" />
          <div className={ styles.container }>
            <Member headshot="images/headshot-placeholder.png" title="President" name="TBD" bio="TBD" />
            <Member headshot="images/headshot-placeholder.png" title="Vice President" name="TBD" bio="TBD" />
            <Member headshot="images/headshot-placeholder.png" title="Treasurer" name="TBD" bio="TBD" />
            <Member headshot="images/headshot-placeholder.png" title="Secretary" name="TBD" bio="TBD" />
            <Member headshot="images/headshot-placeholder.png" title="Social Media and Website" name="TBD" bio="TBD" />
            <Member headshot="images/headshot-placeholder.png" title="Volunteer Coordinator" name="TBD" bio="TBD" />
          </div>
        </main>
    )
  }