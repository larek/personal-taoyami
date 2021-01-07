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
        {data.map((i, k) => {
          return (
            <div className='bg-light p-4 mb-4' key={'resume-item-' + k}>
              <div className='lead fw-normal'>{i.name}</div>
              <small className='text-uppercase'>{i.period}</small>
              <div className='py-3'>
                {
                  i.links.map((i, k) => {
                    return <div><a target='_blank' href={i} key={'resume-item' + k}> <i className='bi bi-link-45deg'></i> {i} </a></div>
                  })
                }
              </div>
              <table className='table table'>
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
      </Content>
    </Layout>
  );

}