import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/penguin_fire.svg').default,
    description: (
      <>
        validateIT vas designed for easy and straight-forward use! Just follow
        the <a href="docs/">documentation</a> and start validating!
      </>
    ),
  },
  {
    title: '4 Different Validation Interfaces',
    Svg: require('@site/static/img/penguin_design.svg').default,
    description: (
      <>
        You can choose from 4 different validation interfaces: <br/>
        <a href="docs/lib">Library:</a> Integrate Effortlessly,<br/>
        <a href="docs/cli">CLI App:</a> Command Validation at Your Fingertips, <br/>
        <a href="docs/web_service">Web Service:</a> Access Validation On-the-Go,<br/>
        <a href="docs/web_app">Web App:</a> Explore Validation with Ease,

      </>
    ),
  },
  {
    title: 'Nuget Package Available',
    Svg: require('@site/static/img/penguin_laptop.svg').default,
    description: (
      <>
        For your convenience we have created a <a href="https://www.nuget.org/packages/CSVW-validator-lib" target="_blank"> nugget package</a>
        you can use in your C# projects!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
