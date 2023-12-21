package 08.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import 08.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: Сервер
 */
@Entity(name = "IIS08Сервер")
@Table(schema = "public", name = "Сервер")
public class Server {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "IP")
    private String ip;

    @Column(name = "Порт")
    private String порт;

    @Column(name = "Протокол")
    private String протокол;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudnik")
    @Convert("Sotrudnik")
    @Column(name = "Сотрудник", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudnik", insertable = false, updatable = false)
    private Sotrudnik sotrudnik;

    @OneToMany(mappedBy = "server", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Programmy> programmys;

    @OneToMany(mappedBy = "server", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Nastrojki> nastrojkis;


    public Server() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getIP() {
      return ip;
    }

    public void setIP(String ip) {
      this.ip = ip;
    }

    public String getПорт() {
      return порт;
    }

    public void setПорт(String порт) {
      this.порт = порт;
    }

    public String getПротокол() {
      return протокол;
    }

    public void setПротокол(String протокол) {
      this.протокол = протокол;
    }


}