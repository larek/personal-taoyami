import Layout from '../components/layout';
import Content from '../components/content';
const title = 'Навыки';

export default function skills() {
  return (
    <Layout title={title}>
      <Content title={title}>
        <table className="table">
          <tbody>
  <tr>
              <td>Веб-дизайн</td>
            </tr>
  <tr>
              <td>Коммуникационный дизайн</td>
            </tr>
  <tr>
              <td>Разработка фирменного стиля, айдентики, брендинга</td>
            </tr>
  <tr>
              <td>Типографика</td>
            </tr>
  <tr>
              <td>Figma, пакет Adobe (Al, Ps, Lr, Ae)</td>
            </tr>
  <tr>
              <td>Верстка в html и css на хорошем уровне , JS — начальные навыки (проходила полугодовой курс по frontend-разработке)</td>
            </tr>
  <tr>
              <td>Blender – начальные навыки</td>
            </tr>
  <tr>
              <td>Полиграфический дизайн</td>
            </tr>
  <tr>
              <td>Разработка мерча и сувенирной продукции</td>
            </tr>
  <tr>
              <td>Высокий уровень написания текстов любых форматов, редактура</td>
            </tr>
  <tr>
              <td>Профессиональная фотосъемка — промышленные съемки, репортажи событий, персональные и бизнес-портреты</td>
            </tr>
          </tbody>
        </table>
      </Content>
    </Layout>
  );

}
