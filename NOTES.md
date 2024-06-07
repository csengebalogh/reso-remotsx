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


- resolumeService.ts returns the `response.data` object!!!