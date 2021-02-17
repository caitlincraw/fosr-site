import Partnership from '../components/Partnership/Partnership'
import styles from '../styles/partnerships.module.css'
import PageHeader from '../components/PageHeader/PageHeader'

export default function Partnerships() {
    return (
        <main>
          <PageHeader title="PARK PARTNERSHIPS" />
          <div className={ styles.container }>
            <Partnership site="http://www.chattanooga.gov/parks" logo="images/cityofchattlogo.png" alt="City of Chattanooga Logo" />
            <Partnership site="https://www.trgt.org/stringers" logo="images/trgtlogo.png" alt="Tennessee River Gorge Trust (TRGT) Logo" />
            <Partnership site="https://www.tpl.org/our-work/stringers-ridge" logo="images/tpllogo.png" alt="Trust for Public Land (TPL) Logo" />
            <Partnership site="https://www.sorbachattanooga.org/" logo="images/sorbalogo.png" alt="Southern Off-Road Bicycle Association (SORBA) Logo" />
        </div>
        </main>
    )
  }