- mapping `composition.layers` always displays the layers in the SELECTED deck 
- index 4 yo self (not readable from API)


            <table>
              <tbody>
                {composition.layers?.map((layer) => (
                  <tr key={layer.id}>
                    <td>{layer.id} {layer.name?.value}</td>
                    <td>
                      {layer.clips?.map((clip) => <a key={clip.id}>{clip.name?.value}</a>)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

                    <div className='hidden'>
          {composition ? (
            <div>
              <pre>{JSON.stringify(composition, null, 2)}</pre>
            </div>

          ) : (
            <p>Loading composition...</p>
          )}
        </div>
      </div>

        <Row>
          <Col xs={12} md={12} className="mb-3">
            <div className="p-3 bg-light border">{children}</div>
          </Col>
        </Row>

- resolumeService.ts returns the `response.data` object!!!