<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <table>
                    <xsl:for-each select="pokedex/entry">
                        <tr>
                            <th>Species</th>
                            <td><xsl:value-of select="species"/></td>    
                        </tr>
                        <tr>
                            <th>Typing</th>
                            <td><xsl:value-of select="type"/></td>
                        </tr>
                        <tr>
                            <th>Weight</th>
                            <td><xsl:value-of select="weight"/></td>
                        </tr>
                        <tr>
                            <th>Height</th>
                            <td><xsl:value-of select="height"/></td>
                        </tr>
                        
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>