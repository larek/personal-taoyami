import Layout from '../components/layout';
import Content from '../components/content';
const title = 'Образование';

export default function education() {
  return (
    <Layout title={title}>
      <Content title={title}>
        <table className='table'>
          <thead>
            <tr>
              <th>Высшее образование</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href='https://www.nntu.ru/' target='_blank'>НГТУ им. Р.Е. Алексеева</a>, экономический факультет
            </td>
            </tr>
          </tbody>
        </table>

        <table className='table'>
          <thead>
            <tr>
              <th>Курсы повышения квалификации</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Курс <a href='https://www.udemy.com/course/ux-from-zero/' target='_blank'>«UX c нуля как стать проектировщиком интерфейсов»</a></td></tr>
            <tr><td>Курс <a href='https://rs.school/js/' target='_blank'>JavaScript/Front-end</a></td></tr>
            <tr><td>Давно — курсы «Реальный Маркетинг», «Яндекс.Директ», «SMM-специалист» от Нетологии</td></tr>
            <tr><td>Изучение редактуры по всем доступным платным и бесплатным материалам редактора Максима Ильяхова из <a href="https://bureau.ru" target='_blank'>«Бюро Горбунова»</a></td></tr>
          </tbody>
        </table>

        <table className='table'>
          <thead>
            <tr>
              <th>Текущее обучение</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Blender</td>
              <td>UX/UI</td>
            </tr>
          </tbody>
        </table>

      </Content>
    </Layout>
  )
}
