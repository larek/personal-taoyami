import Layout from '../components/layout';
import Content from '../components/content';
const title = 'Опыт работы';

export default function contacts() {
  return (
    <Layout title={title}>
      <Content title={title}>
        <div class='resume'>
          <div class="resume-item">
            <h4>АНО ИРГСНО (Институт развития городской среды Нижегородской области)</h4>
            <h5>март 2019 - Настоящее время</h5>
            <p><em>Специалист по внешним коммуникациям</em></p>
            <ul>
              <li>Ведение всех публичных ресурсов Института — сайт иргсно.рф, социальные сети, YouTube-канал.</li>
              <li>Разработка контент-стратегии для вовлечения пользователей в процессы развития городской среды и популяризации деятельности Института.</li>
              <li>Создание текстовых материалов любого объема — пресс-релизы, статьи, интервью, ответы на запросы СМИ, разработка текстов для информационных стендов.</li>
              <li>Проведение фотосъемок — репортажи с мероприятий, процесс строительства на территориях, портретные съемки, предметные съемки для информационных стендов.</li>
              <li>Редактура внутренних текстовых материалов Института.</li>
              <li>Работа с большой командой архитекторов, специалистов по коммуникациям, специалистов по вовлечению и другими.</li>
              <li>Наполнение сайта — ведение блога Института, создание новых страниц с информацией о проектах, деятельности.</li>
            </ul>
          </div>
          <div class="resume-item">
            <h4>Graphic design specialist</h4>
            <h5>2017 - 2018</h5>
            <p><em>Stepping Stone Advertising, New York, NY</em></p>
            <ul>
              <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
              <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
              <li>Recommended and consulted with clients on the most appropriate graphic design</li>
              <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
            </ul>
          </div>
        </div>
      </Content>
    </Layout>
  );

}