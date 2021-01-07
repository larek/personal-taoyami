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
                УРАО (Университет Российской Академии Образования).
                Факультет «Связи с общественностью»
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
            <tr><td>Курс «SMM-специалист» от <a href='https://netology.ru/programs/smm-specialist' target='_blank'>«Нетология»</a></td></tr>
            <tr><td>Курс «UX c нуля как стать проектировщиком интерфейсов»</td></tr>
            <tr><td>Курс «Реальный Директ 2.0»</td></tr>
            <tr><td>Курс «Реальный Маркетинг»</td></tr>
            <tr><td>Детальное изучение бесплатных и платных материалов главреда Максима Ильяхова, материалов <a href="https://bureau.ru" target='_blank'>«Бюро Горбунова»</a> и материалов, рекомендованных <a href="https://bureau.ru/school/editors/13/" target='_blank'>«Школой редакторов»</a>.</td></tr>
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
              <td>Курс по созданию анимации в Adobe After Effects.</td>
            </tr>
          </tbody>
        </table>

      </Content>
    </Layout>
  )
}