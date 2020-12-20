import Layout from '../components/layout';
import Content from '../components/content';
import resumeList from '../data/resume.ts';
const title = 'Опыт работы';

export async function getStaticProps() {
  const data = resumeList
  return { props: { data } }
}

export default function contacts({ data }) {
  return (
    <Layout title={title}>
      <Content title={title}>
        <div className='resume'>
          {data.map((i, k) => {
            return (
              <div className="resume-item" key={'resume-item-' + k}>
                <div className='py-1'><i className='bi bi-people-fill'></i> {i.name}</div>
                <div className='py-1'><i className='bi bi-calendar3'></i> {i.period}</div>
                <div className='py-1'>
                  <i className='bi bi-link-45deg'></i>
                  {
                    i.links.map((i, k) => {
                      return <a target='_blank' href={i} key={'resume-item' + k}>{i} </a>
                    })
                  }
                </div>
                <table className='table table-hover mt-2'>
                  <thead>
                    <tr><th>{i.position}</th></tr>
                  </thead>
                  <tbody>

                    {
                      i.works.map((i, k) => {
                        return <tr key={'resume-item' + k}><td>{i}</td></tr>
                      })
                    }
                  </tbody>
                </table>
              </div>
            )
          })}
        </div>
      </Content>
    </Layout>
  );

}