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
                <h4>{i.name}</h4>
                <div className='mb-4'>
                  {
                    i.links.map((i, k) => {
                      return <a className='btn btn-link btn-sm ml-2' target='_blank' href={i} key={'resume-item' + k}>{i}</a>
                    })
                  }
                </div>
                <h5>{i.period}</h5>
                <p><em>{i.position}</em></p>
                <ul>
                  {
                    i.works.map((i, k) => {
                      return <li key={'resume-item' + k}>{i}</li>
                    })
                  }
                </ul>
              </div>
            )
          })}
        </div>
      </Content>
    </Layout>
  );

}