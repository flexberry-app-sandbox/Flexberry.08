package 08.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import 08.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Настройки
 */
@Entity(name = "IIS08Настройки")
@Table(schema = "public", name = "Настройки")
public class Nastrojki {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ТипНастроек")
    private String типнастроек;

    @Column(name = "ДатаНачала")
    private Date датаначала;

    @Column(name = "ДатаОкончания")
    private Date датаокончания;

    @Column(name = "Описание")
    private String описание;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Server")
    @Convert("Server")
    @Column(name = "Сервер", length = 16, unique = true, nullable = false)
    private UUID _serverid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Server", insertable = false, updatable = false)
    private Server server;


    public Nastrojki() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getТипНастроек() {
      return типнастроек;
    }

    public void setТипНастроек(String типнастроек) {
      this.типнастроек = типнастроек;
    }

    public Date getДатаНачала() {
      return датаначала;
    }

    public void setДатаНачала(Date датаначала) {
      this.датаначала = датаначала;
    }

    public Date getДатаОкончания() {
      return датаокончания;
    }

    public void setДатаОкончания(Date датаокончания) {
      this.датаокончания = датаокончания;
    }

    public String getОписание() {
      return описание;
    }

    public void setОписание(String описание) {
      this.описание = описание;
    }


}