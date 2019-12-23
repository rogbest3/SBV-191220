package com.moneyhub.web.faq;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Entity
@Table(name="FAQ")
@Component
public class FAQ {

	@Id
	@GeneratedValue
	@Column(name="ARTSEQ", nullable=false)
	private String artSeq;
	@Column(name="IMAGE", nullable=false)
	private String image;
	@Column(name="CEMAIL", nullable=false)
	private String cemail;
	@Column(name="COMMENTS", nullable=false)
	private String comments;
	@Column(name="MSG", nullable=false)
	private String msg;
	@Column(name="RATING", nullable=false)
	private String rating;
	@Column(name="BOARDTYPE", nullable=false)
	private String boardType;
	@Column(name="TITLE", nullable=false)
	private String title;
	@Column(name="CONTENT", nullable=false)
	private String content;
	@Temporal(TemporalType.DATE)
	@Column(name="REGDATE", nullable=false)
	private Date regdate;
	
}
