import React from "react";

export default function ScoreBoardRow({gameName, address, hour, betAmo, multiplier, won}){

    return(
                    <tr>
                        <td>
                            {gameName}
                        </td>
                        <td>
                            {address}
                        </td>
                        <td>
                            {hour}
                        </td>
                        <td>
                            {betAmo}
                        </td>
                        <td>
                            {multiplier}
                        </td>
                        <td>
                            {won}
                        </td>
                    </tr>

    )
}