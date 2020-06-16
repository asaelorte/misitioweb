import React from 'react'
import { useStaticQuery, grap, graphql} from 'gatsby'

export default () => {

    const data = useStaticQuery(graphql `
    {
        codigofacilitoJson {
          data {
            courses {
              title
              progress
            }
          }
        }
      }
    `)
    console.log(data)
    return (
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center">Mis certificados online en Codigofacilito</h2>
                    <div className="flex mt-8">
                        {
                            data.codigofacilitoJson.data.courses.map(certificate => (
                                <div className="shadow p-8 bg-white mr-4 rounded">
                                    <h4 className="font-bold">
                                    <a href={certificate.url} target="_blank">{certificate.title}</a>
                                    </h4>
                                    <div className="text-center">
                                        <span className="inline-block bg-purple-200 text-purple-700 p-2 mt-2 radius">Progreso: {certificate.progress}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </section>
        
    )
}
